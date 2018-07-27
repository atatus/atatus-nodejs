// Type definitions for atatus-node package
// Project: https://github.com/atatus/atatus-node

declare namespace atatus {

    interface Atatus {

        start(options: ConfigurationOptions): Atatus;

        stop(options?: any, callback?: Function): void;

        excludeURL(url: string): void;

        notifyError(error: string | Error, customData?: Object): void;

        setTransactionName(name: string): void;

        startTransaction(name: string, callback: Function): any;

        endTransaction(): void;

        createLayer(name: string, callback: Function): any;
    }

    interface ConfigurationOptions {

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

        beforeErrorSend?(payload: any): any;

        groupingKey?(payload: any): string;
    }

}

declare const atatus: atatus.Atatus;
export = atatus;
