import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();
    await Apify.metamorph('maxcopell/tripadvisor', {
        ...input,
        proxy: {
            "useApifyProxy": true,
        },
    });
});