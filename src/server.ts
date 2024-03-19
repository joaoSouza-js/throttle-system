import debug from "debug";

type Task = () => Promise<number>;

const logger = debug("core");
debug.enable("*");
debug.log = console.log;

// if you want to decrease the running time, you can increase the workers count
const workersCount = 8;

const delays = [...Array(50)].map(() => Math.floor(Math.random() * 900) + 100);
const load = delays.map(
    (delay) => (): Promise<number> =>
        new Promise((resolve) => {
            setTimeout(() => resolve(Math.floor(delay / 100)), delay);
        }),
);

async function throttle(workers: number, tasks: Task[]): Promise<number[]> {
    const results: number[] = [];
    let currentIndex = 0;

    async function executeTasks(): Promise<void> {
        if (currentIndex < tasks.length) {
            const batch = tasks.slice(currentIndex, currentIndex + workers);
            const promises = batch.map((task) => task());
            currentIndex += batch.length;

            try {
                const batchResults = await Promise.all(promises);
                results.push(...batchResults);
            } catch (error) {
                logger("Error in batch:", error);
            }

            await executeTasks();
        }
    }

    await executeTasks();

    return results;
}

async function bootstrap() {
    logger("Starting...");
    const start = Date.now();
    const answers = await throttle(workersCount, load);
    logger("Done in %dms", Date.now() - start);
    logger("Answers: %O", answers);
}

bootstrap()
    .then(() => {
        // Process results here
    })
    .catch((err) => {
        logger("General fail: %O", err);
    });
