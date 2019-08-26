// Type definitions for atatus-nodejs package
// Project: https://github.com/atatus/atatus-nodejs

declare namespace atatus {

    interface Atatus {

        start(options: ConfigurationOptions): Atatus;

        excludeURL(url: string): void;

        notifyError(error: string | Error, customData?: Object): void;

        setTransactionName(name: string): void;

        startTransaction(name: string): any;

        endTransaction(): void;

        createSpan(name: string, type?: string, customData?: Object): any;
    }

    interface ConfigurationOptions {

        /** License Key and App name of the project. Mandatory */
        licenseKey: string;
        appName: string;

        appVersion?: string;

        releaseStage?: string;

        hostname?: string;

        logLevel?: string;

        ignoreStatusCodes?: number[];

        tags?: string[];

        customData?: Object;

        useSSL?: boolean;
        proxy?: string;
        notifyHost?: string;
        notifyPath?: string;
        notifyPort?: string;
    }

}

declare const atatus: atatus.Atatus;
export = atatus;
