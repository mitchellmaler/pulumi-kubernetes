// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";

export class Stream extends lumi.NamedResource implements StreamArgs {
    public readonly arn?: string;
    public readonly _name: string;
    public readonly retentionPeriod?: number;
    public readonly shardCount: number;
    public readonly shardLevelMetrics?: string[];
    public readonly tags?: {[key: string]: any};

    constructor(name: string, args: StreamArgs) {
        super(name);
        this.arn = args.arn;
        this._name = args._name;
        this.retentionPeriod = args.retentionPeriod;
        this.shardCount = args.shardCount;
        this.shardLevelMetrics = args.shardLevelMetrics;
        this.tags = args.tags;
    }
}

export interface StreamArgs {
    readonly arn?: string;
    readonly _name: string;
    readonly retentionPeriod?: number;
    readonly shardCount: number;
    readonly shardLevelMetrics?: string[];
    readonly tags?: {[key: string]: any};
}
