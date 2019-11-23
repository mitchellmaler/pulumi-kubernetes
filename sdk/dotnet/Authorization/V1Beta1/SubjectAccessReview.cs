// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Kubernetes.Authorization.V1Beta1
{
    /// <summary>
    /// SubjectAccessReview checks whether or not a user or group can perform an action.
    /// </summary>
    public partial class SubjectAccessReview : Pulumi.CustomResource
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
        /// Spec holds information about the request being evaluated
        /// </summary>
        [Output("spec")]
        public Output<Types.Outputs.Authorization.V1Beta1.SubjectAccessReviewSpec> Spec { get; private set; } = null!;

        /// <summary>
        /// Status is filled in by the server and indicates whether the request is allowed or not
        /// </summary>
        [Output("status")]
        public Output<Types.Outputs.Authorization.V1Beta1.SubjectAccessReviewStatus> Status { get; private set; } = null!;


        /// <summary>
        /// Create a SubjectAccessReview resource with the given unique name, arguments, and options.
        /// </summary>
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public SubjectAccessReview(string name, Types.Inputs.Authorization.V1Beta1.SubjectAccessReviewArgs? args = null, CustomResourceOptions? options = null)
            : base("kubernetes:authorization.k8s.io/v1beta1:SubjectAccessReview", name, SetAPIKindAndVersion(args), MakeResourceOptions(options))
        {
        }

        private static ResourceArgs SetAPIKindAndVersion(Types.Inputs.Authorization.V1Beta1.SubjectAccessReviewArgs? args)
        {
            if (args != null) {
                args.ApiVersion = "authorization.k8s.io/v1beta1";
                args.Kind = "SubjectAccessReview";
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
        /// Get an existing SubjectAccessReview resource's state with the given name and ID.
        /// </summary>
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static SubjectAccessReview Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new SubjectAccessReview(name, null, CustomResourceOptions.Merge(options, new CustomResourceOptions
            {
                Id = id,
            }));
        }

    }
}
