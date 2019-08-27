# Copyright 2016-2019, Pulumi Corporation.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
from typing import Optional

import pulumi
import pulumi.runtime
from pulumi import Input, ResourceOptions

from ... import tables, version


class RuntimeClass(pulumi.CustomResource):
    """
    RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is
    used to determine which container runtime is used to run all containers in a pod. RuntimeClasses
    are (currently) manually defined by a user or cluster provisioner, and referenced in the
    PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running
    the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md
    """

    apiVersion: pulumi.Output[str]
    """
    APIVersion defines the versioned schema of this representation of an object. Servers should
    convert recognized schemas to the latest internal value, and may reject unrecognized values.
    More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
    """

    kind: pulumi.Output[str]
    """
    Kind is a string value representing the REST resource this object represents. Servers may infer
    this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More
    info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
    """

    handler: pulumi.Output[str]
    """
    Handler specifies the underlying runtime and configuration that the CRI implementation will use
    to handle pods of this class. The possible values are specific to the node & CRI configuration.
    It is assumed that all handlers are available on every node, and handlers of the same name are
    equivalent on every node. For example, a handler called "runc" might specify that the runc OCI
    runtime (using native Linux containers) will be used to run the containers in a pod. The Handler
    must conform to the DNS Label (RFC 1123) requirements, and is immutable.
    """

    metadata: pulumi.Output[dict]
    """
    More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
    """

    def __init__(self, resource_name, opts=None, handler=None, metadata=None, __name__=None, __opts__=None):
        """
        Create a RuntimeClass resource with the given unique name, arguments, and options.

        :param str resource_name: The _unique_ name of the resource.
        :param pulumi.ResourceOptions opts: A bag of options that control this resource's behavior.
        :param pulumi.Input[str] handler: Handler specifies the underlying runtime and configuration that the CRI
               implementation will use to handle pods of this class. The possible values are
               specific to the node & CRI configuration.  It is assumed that all handlers are
               available on every node, and handlers of the same name are equivalent on every node.
               For example, a handler called "runc" might specify that the runc OCI runtime (using
               native Linux containers) will be used to run the containers in a pod. The Handler
               must conform to the DNS Label (RFC 1123) requirements, and is immutable.
        :param pulumi.Input[dict] metadata: More info:
               https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['apiVersion'] = 'node.k8s.io/v1beta1'
        __props__['kind'] = 'RuntimeClass'
        if handler is None:
            raise TypeError('Missing required property handler')
        __props__['handler'] = handler
        __props__['metadata'] = metadata

        __props__['status'] = None

        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(version=version.get_version()))

        super(RuntimeClass, self).__init__(
            "kubernetes:node.k8s.io/v1beta1:RuntimeClass",
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None):
        """
        Get the state of an existing `RuntimeClass` resource, as identified by `id`.
        The ID is of the form `[namespace]/[name]`; if `[namespace]` is omitted,
        then (per Kubernetes convention) the ID becomes `default/[name]`.

        Pulumi will keep track of this resource using `resource_name` as the Pulumi ID.

        :param str resource_name: _Unique_ name used to register this resource with Pulumi.
        :param pulumi.Input[str] id: An ID for the Kubernetes resource to retrieve.
               Takes the form `[namespace]/[name]` or `[name]`.
        :param Optional[pulumi.ResourceOptions] opts: A bag of options that control this
               resource's behavior.
        """
        opts = ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))
        return RuntimeClass(resource_name, opts)

    def translate_output_property(self, prop: str) -> str:
        return tables._CASING_FORWARD_TABLE.get(prop) or prop

    def translate_input_property(self, prop: str) -> str:
        return tables._CASING_BACKWARD_TABLE.get(prop) or prop
