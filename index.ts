Bun.serve({
    hostname: '127.0.0.1',
    port: 3000,
    async fetch(req: Request): Promise<Response> {
        let response = new Response();

        






        return response;
    }
});


const calculateCaracBonus = (value: number) => Math.floor((value-10) / 2);