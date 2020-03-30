// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

/**
 * CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
 */
export class CustomResourceDefinitionList extends pulumi.CustomResource {
    /**
     * Get an existing CustomResourceDefinitionList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CustomResourceDefinitionList {
        return new CustomResourceDefinitionList(name, undefined{ ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kubernetes:apiextensions.k8s.io/v1beta1:CustomResourceDefinitionList';

    /**
     * Returns true if the given object is an instance of CustomResourceDefinitionList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CustomResourceDefinitionList {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CustomResourceDefinitionList.__pulumiType;
    }

    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    public readonly apiVersion!: pulumi.Output<string | undefined>;
    /**
     * items list individual CustomResourceDefinition objects
     */
    public readonly items!: pulumi.Output<outputs.apiextensions.k8s.io.v1beta1.CustomResourceDefinition[] | undefined>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    public readonly metadata!: pulumi.Output<outputs.meta.v1.ListMeta | undefined>;

    /**
     * Create a CustomResourceDefinitionList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomResourceDefinitionListArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CustomResourceDefinitionListArgs | CustomResourceDefinitionListState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as CustomResourceDefinitionListState | undefined;
            inputs["apiVersion"] = state ? state.apiVersion : undefined;
            inputs["items"] = state ? state.items : undefined;
            inputs["kind"] = state ? state.kind : undefined;
            inputs["metadata"] = state ? state.metadata : undefined;
        } else {
            const args = argsOrState as CustomResourceDefinitionListArgs | undefined;
            if (!args || args.items === undefined) {
                throw new Error("Missing required property 'items'");
            }
            inputs["apiVersion"] = (args ? args.apiVersion : undefined) || "apiextensions.k8s.io/v1beta1";
            inputs["items"] = args ? args.items : undefined;
            inputs["kind"] = (args ? args.kind : undefined) || "CustomResourceDefinitionList";
            inputs["metadata"] = args ? args.metadata : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(CustomResourceDefinitionList.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a CustomResourceDefinitionList resource.
 */
export interface CustomResourceDefinitionListArgs {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    readonly apiVersion?: pulumi.Input<string>;
    /**
     * items list individual CustomResourceDefinition objects
     */
    readonly items: pulumi.Input<pulumi.Input<inputs.apiextensions.k8s.io.v1beta1.CustomResourceDefinition>[]>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly kind?: pulumi.Input<string>;
    readonly metadata?: pulumi.Input<inputs.meta.v1.ListMeta>;
}
