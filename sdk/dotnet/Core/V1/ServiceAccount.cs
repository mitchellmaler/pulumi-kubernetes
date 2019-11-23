// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Kubernetes.Core.V1
{
    /// <summary>
    /// ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral
    /// systems, for an identity * a principal that can be authenticated and authorized * a set of
    /// secrets
    /// </summary>
    public partial class ServiceAccount : Pulumi.CustomResource
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
        /// AutomountServiceAccountToken indicates whether pods running as this service account
        /// should have an API token automatically mounted. Can be overridden at the pod level.
        /// </summary>
        [Output("automountServiceAccountToken")]
        public Output<bool> AutomountServiceAccountToken { get; private set; } = null!;

        /// <summary>
        /// ImagePullSecrets is a list of references to secrets in the same namespace to use for
        /// pulling any images in pods that reference this ServiceAccount. ImagePullSecrets are
        /// distinct from Secrets because Secrets can be mounted in the pod, but ImagePullSecrets
        /// are only accessed by the kubelet. More info:
        /// https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod
        /// </summary>
        [Output("imagePullSecrets")]
        public Output<Types.Outputs.Core.V1.LocalObjectReference[]> ImagePullSecrets { get; private set; } = null!;

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
        /// Secrets is the list of secrets allowed to be used by pods running using this
        /// ServiceAccount. More info: https://kubernetes.io/docs/concepts/configuration/secret
        /// </summary>
        [Output("secrets")]
        public Output<Types.Outputs.Core.V1.ObjectReference[]> Secrets { get; private set; } = null!;


        /// <summary>
        /// Create a ServiceAccount resource with the given unique name, arguments, and options.
        /// </summary>
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ServiceAccount(string name, Types.Inputs.Core.V1.ServiceAccountArgs? args = null, CustomResourceOptions? options = null)
            : base("kubernetes:core/v1:ServiceAccount", name, SetAPIKindAndVersion(args), MakeResourceOptions(options))
        {
        }

        private static ResourceArgs SetAPIKindAndVersion(Types.Inputs.Core.V1.ServiceAccountArgs? args)
        {
            if (args != null) {
                args.ApiVersion = "v1";
                args.Kind = "ServiceAccount";
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
        /// Get an existing ServiceAccount resource's state with the given name and ID.
        /// </summary>
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ServiceAccount Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ServiceAccount(name, null, CustomResourceOptions.Merge(options, new CustomResourceOptions
            {
                Id = id,
            }));
        }

    }
}
