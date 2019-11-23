// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Kubernetes.Policy.V1Beta1
{
    /// <summary>
    /// PodDisruptionBudget is an object to define the max disruption that can be caused to a
    /// collection of pods
    /// </summary>
    public partial class PodDisruptionBudget : Pulumi.CustomResource
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

        
        [Output("metadata")]
        public Output<Types.Outputs.Meta.V1.ObjectMeta> Metadata { get; private set; } = null!;

        /// <summary>
        /// Specification of the desired behavior of the PodDisruptionBudget.
        /// </summary>
        [Output("spec")]
        public Output<Types.Outputs.Policy.V1Beta1.PodDisruptionBudgetSpec> Spec { get; private set; } = null!;

        /// <summary>
        /// Most recently observed status of the PodDisruptionBudget.
        /// </summary>
        [Output("status")]
        public Output<Types.Outputs.Policy.V1Beta1.PodDisruptionBudgetStatus> Status { get; private set; } = null!;


        /// <summary>
        /// Create a PodDisruptionBudget resource with the given unique name, arguments, and options.
        /// </summary>
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public PodDisruptionBudget(string name, Types.Inputs.Policy.V1Beta1.PodDisruptionBudgetArgs? args = null, CustomResourceOptions? options = null)
            : base("kubernetes:policy/v1beta1:PodDisruptionBudget", name, SetAPIKindAndVersion(args), MakeResourceOptions(options))
        {
        }

        private static ResourceArgs SetAPIKindAndVersion(Types.Inputs.Policy.V1Beta1.PodDisruptionBudgetArgs? args)
        {
            if (args != null) {
                args.ApiVersion = "policy/v1beta1";
                args.Kind = "PodDisruptionBudget";
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
        /// Get an existing PodDisruptionBudget resource's state with the given name and ID.
        /// </summary>
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static PodDisruptionBudget Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new PodDisruptionBudget(name, null, CustomResourceOptions.Merge(options, new CustomResourceOptions
            {
                Id = id,
            }));
        }

    }
}
