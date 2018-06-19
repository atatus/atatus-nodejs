// Type definitions for atatus-node package
// Project: https://github.com/atatus/atatus-node

export interface AgentOptions {

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

export function start(options: AgentOptions): any;

export function stop(options?: any, callback?: Function): void;

export function excludeURL(url: string): any;

export function notifyError(ex: Error, customData?: Object): void;

export function setTransactionName(name: string): any;

export function startTransaction(name: string, callback: Function): any;

export function endTransaction(): void;

export function createLayer(name: string, callback: Function): any;


export namespace start {
    const prototype: {
    };

}

export namespace stop {
    const prototype: {
    };

}

export namespace excludeURL {
    const prototype: {
    };

}

export namespace notifyError {
    const prototype: {
    };

}

export namespace setTransactionName {
    const prototype: {
    };

}

export namespace startTransaction {
    const prototype: {
    };

}

export namespace endTransaction {
    const prototype: {
    };

}

export namespace createLayer {
    const prototype: {
    };

}
