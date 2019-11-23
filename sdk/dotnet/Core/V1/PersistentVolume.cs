// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Kubernetes.Core.V1
{
    /// <summary>
    /// PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous
    /// to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
    /// </summary>
    public partial class PersistentVolume : Pulumi.CustomResource
    {
        /// <summary>
        /// APIVersion defines the versioned schema of this representation of an object. Servers
        /// should convert recognized schemas to the latest internal value, and may reject
        /// unrecognized values. More info:
        /// https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
        /// </summary>
        [Output("apiVersion")]
        public Output<string> ApiVersion { get; private set; } = null!;

        /// <summary>
        /// Kind is a string value representing the REST resource this object represents. Servers
        /// may infer this from the endpoint the client submits requests to. Cannot be updated. In
        /// CamelCase. More info:
        /// https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
        /// </summary>
        [Output("kind")]
        public Output<string> Kind { get; private set; } = null!;

        /// <summary>
        /// Standard object's metadata. More info:
        /// https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
        /// </summary>
        [Output("metadata")]
        public Output<Types.Outputs.Meta.V1.ObjectMeta> Metadata { get; private set; } = null!;

        /// <summary>
        /// Spec defines a specification of a persistent volume owned by the cluster. Provisioned by
        /// an administrator. More info:
        /// https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistent-volumes
        /// </summary>
        [Output("spec")]
        public Output<Types.Outputs.Core.V1.PersistentVolumeSpec> Spec { get; private set; } = null!;

        /// <summary>
        /// Status represents the current information/status for the persistent volume. Populated by
        /// the system. Read-only. More info:
        /// https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistent-volumes
        /// </summary>
        [Output("status")]
        public Output<Types.Outputs.Core.V1.PersistentVolumeStatus> Status { get; private set; } = null!;


        /// <summary>
        /// Create a PersistentVolume resource with the given unique name, arguments, and options.
        /// </summary>
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public PersistentVolume(string name, Types.Inputs.Core.V1.PersistentVolumeArgs? args = null, CustomResourceOptions? options = null)
            : base("kubernetes:core/v1:PersistentVolume", name, SetAPIKindAndVersion(args), MakeResourceOptions(options))
        {
        }

        private static ResourceArgs SetAPIKindAndVersion(Types.Inputs.Core.V1.PersistentVolumeArgs? args)
        {
            if (args != null) {
                args.ApiVersion = "v1";
                args.Kind = "PersistentVolume";
            }
            return args ?? ResourceArgs.Empty;
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            return CustomResourceOptions.Merge(defaultOptions, options);
        }

        /// <summary>
        /// Get an existing PersistentVolume resource's state with the given name and ID.
        /// </summary>
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static PersistentVolume Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new PersistentVolume(name, null, CustomResourceOptions.Merge(options, new CustomResourceOptions
            {
                Id = id,
            }));
        }

    }
}
