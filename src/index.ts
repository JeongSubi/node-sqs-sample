import worker from "./worker";

const startApplication = async (): Promise<void> => {
    try {
        await worker();
    } catch (error: unknown) {
        console.log(error);
    }
};


startApplication();
