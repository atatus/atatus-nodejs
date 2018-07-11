// Type definitions for atatus-node package
// Project: https://github.com/atatus/atatus-node

declare module 'atatus-node' {

    interface AgentOptions {

        /** API Key of the project. Mandatory */
        apiKey: string;

        appVersion?: string;

        releaseStage?: string;

        hostname?: string;

        logLevel?: string;

        filters?: string[];

        ignoreStatusCodes?: number[];

        tags?: string[];

        customData?: Object;

        sendCode?: boolean;

        projectRoot?: string;

        useSSL?: boolean;
        proxy?: string;
        notifyHost?: string;
        notifyPath?: string;
        notifyPort?: string;

        beforeErrorSend?: (data: any) => any;

        groupingKey?: (data: any) => string;
    }

    interface Atatus {

        start(options: AgentOptions): any;

        stop(options?: any, callback?: Function): void;

        excludeURL(url: string): any;

        notifyError(ex: Error, customData?: Object): void;

        setTransactionName(name: string): any;

        startTransaction(name: string, callback: Function): any;

        endTransaction(): void;

        createLayer(name: string, callback: Function): any;
    }

    export = Atatus;
}