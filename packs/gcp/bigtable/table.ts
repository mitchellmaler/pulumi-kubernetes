// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Table extends lumi.NamedResource implements TableArgs {
    public readonly instanceName: string;
    public readonly _name: string;
    public readonly project?: string;
    public readonly splitKeys?: string[];

    constructor(name: string, args: TableArgs) {
        super(name);
        this.instanceName = args.instanceName;
        this._name = args._name;
        this.project = args.project;
        this.splitKeys = args.splitKeys;
    }
}

export interface TableArgs {
    readonly instanceName: string;
    readonly _name: string;
    readonly project?: string;
    readonly splitKeys?: string[];
}
