import NordigenClient from 'nordigen-node';
declare function NordigenProvider(this: any, _options: any): {
    exports: {
        native: () => {
            nordigenClient: NordigenClient;
        };
    };
};
export default NordigenProvider;
