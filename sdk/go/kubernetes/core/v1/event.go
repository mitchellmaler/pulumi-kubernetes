// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v1

import (
	"reflect"

	"github.com/pkg/errors"
	metav1 "github.com/pulumi/pulumi-kubernetes/sdk/go/kubernetes/meta/v1"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Event is a report of an event somewhere in the cluster.
type Event struct {
	pulumi.CustomResourceState

	// What action was taken/failed regarding to the Regarding object.
	Action pulumi.StringPtrOutput `pulumi:"action"`
	// APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	ApiVersion pulumi.StringPtrOutput `pulumi:"apiVersion"`
	// The number of times this event has occurred.
	Count pulumi.IntPtrOutput `pulumi:"count"`
	// Time when this Event was first observed.
	EventTime pulumi.StringPtrOutput `pulumi:"eventTime"`
	// The time at which the event was first recorded. (Time of server receipt is in TypeMeta.)
	FirstTimestamp pulumi.StringPtrOutput `pulumi:"firstTimestamp"`
	// The object that this event is about.
	InvolvedObject ObjectReferencePtrOutput `pulumi:"involvedObject"`
	// Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	Kind pulumi.StringPtrOutput `pulumi:"kind"`
	// The time at which the most recent occurrence of this event was recorded.
	LastTimestamp pulumi.StringPtrOutput `pulumi:"lastTimestamp"`
	// A human-readable description of the status of this operation.
	Message pulumi.StringPtrOutput `pulumi:"message"`
	// Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	Metadata metav1.ObjectMetaPtrOutput `pulumi:"metadata"`
	// This should be a short, machine understandable string that gives the reason for the transition into the object's current status.
	Reason pulumi.StringPtrOutput `pulumi:"reason"`
	// Optional secondary object for more complex actions.
	Related ObjectReferencePtrOutput `pulumi:"related"`
	// Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
	ReportingComponent pulumi.StringPtrOutput `pulumi:"reportingComponent"`
	// ID of the controller instance, e.g. `kubelet-xyzf`.
	ReportingInstance pulumi.StringPtrOutput `pulumi:"reportingInstance"`
	// Data about the Event series this event represents or nil if it's a singleton Event.
	Series EventSeriesPtrOutput `pulumi:"series"`
	// The component reporting this event. Should be a short machine understandable string.
	Source EventSourcePtrOutput `pulumi:"source"`
	// Type of this event (Normal, Warning), new types could be added in the future
	Type pulumi.StringPtrOutput `pulumi:"type"`
}

// NewEvent registers a new resource with the given unique name, arguments, and options.
func NewEvent(ctx *pulumi.Context,
	name string, args *EventArgs, opts ...pulumi.ResourceOption) (*Event, error) {
	if args == nil || args.InvolvedObject == nil {
		return nil, errors.New("missing required argument 'InvolvedObject'")
	}
	if args == nil || args.Metadata == nil {
		return nil, errors.New("missing required argument 'Metadata'")
	}
	if args == nil {
		args = &EventArgs{}
	}
	args.ApiVersion = pulumi.StringPtr("v1")
	args.Kind = pulumi.StringPtr("Event")
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("kubernetes:events.k8s.io/v1beta1:Event"),
		},
	})
	opts = append(opts, aliases)
	var resource Event
	err := ctx.RegisterResource("kubernetes:core/v1:Event", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetEvent gets an existing Event resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetEvent(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *EventState, opts ...pulumi.ResourceOption) (*Event, error) {
	var resource Event
	err := ctx.ReadResource("kubernetes:core/v1:Event", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Event resources.
type eventState struct {
	// What action was taken/failed regarding to the Regarding object.
	Action *string `pulumi:"action"`
	// APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	ApiVersion *string `pulumi:"apiVersion"`
	// The number of times this event has occurred.
	Count *int `pulumi:"count"`
	// Time when this Event was first observed.
	EventTime *string `pulumi:"eventTime"`
	// The time at which the event was first recorded. (Time of server receipt is in TypeMeta.)
	FirstTimestamp *string `pulumi:"firstTimestamp"`
	// The object that this event is about.
	InvolvedObject *ObjectReference `pulumi:"involvedObject"`
	// Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	Kind *string `pulumi:"kind"`
	// The time at which the most recent occurrence of this event was recorded.
	LastTimestamp *string `pulumi:"lastTimestamp"`
	// A human-readable description of the status of this operation.
	Message *string `pulumi:"message"`
	// Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	Metadata *metav1.ObjectMeta `pulumi:"metadata"`
	// This should be a short, machine understandable string that gives the reason for the transition into the object's current status.
	Reason *string `pulumi:"reason"`
	// Optional secondary object for more complex actions.
	Related *ObjectReference `pulumi:"related"`
	// Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
	ReportingComponent *string `pulumi:"reportingComponent"`
	// ID of the controller instance, e.g. `kubelet-xyzf`.
	ReportingInstance *string `pulumi:"reportingInstance"`
	// Data about the Event series this event represents or nil if it's a singleton Event.
	Series *EventSeries `pulumi:"series"`
	// The component reporting this event. Should be a short machine understandable string.
	Source *EventSource `pulumi:"source"`
	// Type of this event (Normal, Warning), new types could be added in the future
	Type *string `pulumi:"type"`
}

type EventState struct {
	// What action was taken/failed regarding to the Regarding object.
	Action pulumi.StringPtrInput
	// APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	ApiVersion pulumi.StringPtrInput
	// The number of times this event has occurred.
	Count pulumi.IntPtrInput
	// Time when this Event was first observed.
	EventTime pulumi.StringPtrInput
	// The time at which the event was first recorded. (Time of server receipt is in TypeMeta.)
	FirstTimestamp pulumi.StringPtrInput
	// The object that this event is about.
	InvolvedObject ObjectReferencePtrInput
	// Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	Kind pulumi.StringPtrInput
	// The time at which the most recent occurrence of this event was recorded.
	LastTimestamp pulumi.StringPtrInput
	// A human-readable description of the status of this operation.
	Message pulumi.StringPtrInput
	// Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	Metadata metav1.ObjectMetaPtrInput
	// This should be a short, machine understandable string that gives the reason for the transition into the object's current status.
	Reason pulumi.StringPtrInput
	// Optional secondary object for more complex actions.
	Related ObjectReferencePtrInput
	// Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
	ReportingComponent pulumi.StringPtrInput
	// ID of the controller instance, e.g. `kubelet-xyzf`.
	ReportingInstance pulumi.StringPtrInput
	// Data about the Event series this event represents or nil if it's a singleton Event.
	Series EventSeriesPtrInput
	// The component reporting this event. Should be a short machine understandable string.
	Source EventSourcePtrInput
	// Type of this event (Normal, Warning), new types could be added in the future
	Type pulumi.StringPtrInput
}

func (EventState) ElementType() reflect.Type {
	return reflect.TypeOf((*eventState)(nil)).Elem()
}

type eventArgs struct {
	// What action was taken/failed regarding to the Regarding object.
	Action *string `pulumi:"action"`
	// APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	ApiVersion *string `pulumi:"apiVersion"`
	// The number of times this event has occurred.
	Count *int `pulumi:"count"`
	// Time when this Event was first observed.
	EventTime *string `pulumi:"eventTime"`
	// The time at which the event was first recorded. (Time of server receipt is in TypeMeta.)
	FirstTimestamp *string `pulumi:"firstTimestamp"`
	// The object that this event is about.
	InvolvedObject ObjectReference `pulumi:"involvedObject"`
	// Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	Kind *string `pulumi:"kind"`
	// The time at which the most recent occurrence of this event was recorded.
	LastTimestamp *string `pulumi:"lastTimestamp"`
	// A human-readable description of the status of this operation.
	Message *string `pulumi:"message"`
	// Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	Metadata metav1.ObjectMeta `pulumi:"metadata"`
	// This should be a short, machine understandable string that gives the reason for the transition into the object's current status.
	Reason *string `pulumi:"reason"`
	// Optional secondary object for more complex actions.
	Related *ObjectReference `pulumi:"related"`
	// Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
	ReportingComponent *string `pulumi:"reportingComponent"`
	// ID of the controller instance, e.g. `kubelet-xyzf`.
	ReportingInstance *string `pulumi:"reportingInstance"`
	// Data about the Event series this event represents or nil if it's a singleton Event.
	Series *EventSeries `pulumi:"series"`
	// The component reporting this event. Should be a short machine understandable string.
	Source *EventSource `pulumi:"source"`
	// Type of this event (Normal, Warning), new types could be added in the future
	Type *string `pulumi:"type"`
}

// The set of arguments for constructing a Event resource.
type EventArgs struct {
	// What action was taken/failed regarding to the Regarding object.
	Action pulumi.StringPtrInput
	// APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	ApiVersion pulumi.StringPtrInput
	// The number of times this event has occurred.
	Count pulumi.IntPtrInput
	// Time when this Event was first observed.
	EventTime pulumi.StringPtrInput
	// The time at which the event was first recorded. (Time of server receipt is in TypeMeta.)
	FirstTimestamp pulumi.StringPtrInput
	// The object that this event is about.
	InvolvedObject ObjectReferenceInput
	// Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	Kind pulumi.StringPtrInput
	// The time at which the most recent occurrence of this event was recorded.
	LastTimestamp pulumi.StringPtrInput
	// A human-readable description of the status of this operation.
	Message pulumi.StringPtrInput
	// Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	Metadata metav1.ObjectMetaInput
	// This should be a short, machine understandable string that gives the reason for the transition into the object's current status.
	Reason pulumi.StringPtrInput
	// Optional secondary object for more complex actions.
	Related ObjectReferencePtrInput
	// Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
	ReportingComponent pulumi.StringPtrInput
	// ID of the controller instance, e.g. `kubelet-xyzf`.
	ReportingInstance pulumi.StringPtrInput
	// Data about the Event series this event represents or nil if it's a singleton Event.
	Series EventSeriesPtrInput
	// The component reporting this event. Should be a short machine understandable string.
	Source EventSourcePtrInput
	// Type of this event (Normal, Warning), new types could be added in the future
	Type pulumi.StringPtrInput
}

func (EventArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*eventArgs)(nil)).Elem()
}
