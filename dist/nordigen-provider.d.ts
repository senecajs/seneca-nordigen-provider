declare function NordigenProvider(this: any, _options: any): {
    exports: {
        native: () => {
            nordigenClient: any;
        };
    };
};
export default NordigenProvider;
