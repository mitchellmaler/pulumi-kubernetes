// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

/**
 * NamespaceList is a list of Namespaces.
 */
export class NamespaceList extends pulumi.CustomResource {
    /**
     * Get an existing NamespaceList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NamespaceList {
        return new NamespaceList(name, undefined{ ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kubernetes:core/v1:NamespaceList';

    /**
     * Returns true if the given object is an instance of NamespaceList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NamespaceList {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NamespaceList.__pulumiType;
    }

    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    public readonly apiVersion!: pulumi.Output<string | undefined>;
    /**
     * Items is the list of Namespace objects in the list. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
     */
    public readonly items!: pulumi.Output<outputs.core.v1.Namespace[] | undefined>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    public readonly metadata!: pulumi.Output<outputs.meta.v1.ListMeta | undefined>;

    /**
     * Create a NamespaceList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamespaceListArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NamespaceListArgs | NamespaceListState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as NamespaceListState | undefined;
            inputs["apiVersion"] = state ? state.apiVersion : undefined;
            inputs["items"] = state ? state.items : undefined;
            inputs["kind"] = state ? state.kind : undefined;
            inputs["metadata"] = state ? state.metadata : undefined;
        } else {
            const args = argsOrState as NamespaceListArgs | undefined;
            if (!args || args.items === undefined) {
                throw new Error("Missing required property 'items'");
            }
            inputs["apiVersion"] = (args ? args.apiVersion : undefined) || "v1";
            inputs["items"] = args ? args.items : undefined;
            inputs["kind"] = (args ? args.kind : undefined) || "NamespaceList";
            inputs["metadata"] = args ? args.metadata : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(NamespaceList.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a NamespaceList resource.
 */
export interface NamespaceListArgs {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    readonly apiVersion?: pulumi.Input<string>;
    /**
     * Items is the list of Namespace objects in the list. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
     */
    readonly items: pulumi.Input<pulumi.Input<inputs.core.v1.Namespace>[]>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly kind?: pulumi.Input<string>;
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly metadata?: pulumi.Input<inputs.meta.v1.ListMeta>;
}
