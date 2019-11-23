// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Kubernetes.Core.V1
{
    /// <summary>
    /// Event is a report of an event somewhere in the cluster.
    /// </summary>
    public partial class Event : Pulumi.CustomResource
    {
        /// <summary>
        /// What action was taken/failed regarding to the Regarding object.
        /// </summary>
        [Output("action")]
        public Output<string> Action { get; private set; } = null!;

        /// <summary>
        /// APIVersion defines the versioned schema of this representation of an object. Servers
        /// should convert recognized schemas to the latest internal value, and may reject
        /// unrecognized values. More info:
        /// https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
        /// </summary>
        [Output("apiVersion")]
        public Output<string> ApiVersion { get; private set; } = null!;

        /// <summary>
        /// The number of times this event has occurred.
        /// </summary>
        [Output("count")]
        public Output<int> Count { get; private set; } = null!;

        /// <summary>
        /// Time when this Event was first observed.
        /// </summary>
        [Output("eventTime")]
        public Output<string> EventTime { get; private set; } = null!;

        /// <summary>
        /// The time at which the event was first recorded. (Time of server receipt is in TypeMeta.)
        /// </summary>
        [Output("firstTimestamp")]
        public Output<string> FirstTimestamp { get; private set; } = null!;

        /// <summary>
        /// The object that this event is about.
        /// </summary>
        [Output("involvedObject")]
        public Output<Types.Outputs.Core.V1.ObjectReference> InvolvedObject { get; private set; } = null!;

        /// <summary>
        /// Kind is a string value representing the REST resource this object represents. Servers
        /// may infer this from the endpoint the client submits requests to. Cannot be updated. In
        /// CamelCase. More info:
        /// https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
        /// </summary>
        [Output("kind")]
        public Output<string> Kind { get; private set; } = null!;

        /// <summary>
        /// The time at which the most recent occurrence of this event was recorded.
        /// </summary>
        [Output("lastTimestamp")]
        public Output<string> LastTimestamp { get; private set; } = null!;

        /// <summary>
        /// A human-readable description of the status of this operation.
        /// </summary>
        [Output("message")]
        public Output<string> Message { get; private set; } = null!;

        /// <summary>
        /// Standard object's metadata. More info:
        /// https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
        /// </summary>
        [Output("metadata")]
        public Output<Types.Outputs.Meta.V1.ObjectMeta> Metadata { get; private set; } = null!;

        /// <summary>
        /// This should be a short, machine understandable string that gives the reason for the
        /// transition into the object's current status.
        /// </summary>
        [Output("reason")]
        public Output<string> Reason { get; private set; } = null!;

        /// <summary>
        /// Optional secondary object for more complex actions.
        /// </summary>
        [Output("related")]
        public Output<Types.Outputs.Core.V1.ObjectReference> Related { get; private set; } = null!;

        /// <summary>
        /// Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
        /// </summary>
        [Output("reportingComponent")]
        public Output<string> ReportingComponent { get; private set; } = null!;

        /// <summary>
        /// ID of the controller instance, e.g. `kubelet-xyzf`.
        /// </summary>
        [Output("reportingInstance")]
        public Output<string> ReportingInstance { get; private set; } = null!;

        /// <summary>
        /// Data about the Event series this event represents or nil if it's a singleton Event.
        /// </summary>
        [Output("series")]
        public Output<Types.Outputs.Core.V1.EventSeries> Series { get; private set; } = null!;

        /// <summary>
        /// The component reporting this event. Should be a short machine understandable string.
        /// </summary>
        [Output("source")]
        public Output<Types.Outputs.Core.V1.EventSource> Source { get; private set; } = null!;

        /// <summary>
        /// Type of this event (Normal, Warning), new types could be added in the future
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Event resource with the given unique name, arguments, and options.
        /// </summary>
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Event(string name, Types.Inputs.Core.V1.EventArgs? args = null, CustomResourceOptions? options = null)
            : base("kubernetes:core/v1:Event", name, SetAPIKindAndVersion(args), MakeResourceOptions(options))
        {
        }

        private static ResourceArgs SetAPIKindAndVersion(Types.Inputs.Core.V1.EventArgs? args)
        {
            if (args != null) {
                args.ApiVersion = "v1";
                args.Kind = "Event";
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
        /// Get an existing Event resource's state with the given name and ID.
        /// </summary>
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Event Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Event(name, null, CustomResourceOptions.Merge(options, new CustomResourceOptions
            {
                Id = id,
            }));
        }

    }
}
