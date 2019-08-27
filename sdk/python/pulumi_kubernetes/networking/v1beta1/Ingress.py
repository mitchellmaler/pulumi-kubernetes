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


class Ingress(pulumi.CustomResource):
    """
    Ingress is a collection of rules that allow inbound connections to reach the endpoints defined
    by a backend. An Ingress can be configured to give services externally-reachable urls, load
    balance traffic, terminate SSL, offer name based virtual hosting etc.
    
    This resource waits until it is ready before registering success for
    create/update and populating output properties from the current state of the resource.
    The following conditions are used to determine whether the resource creation has
    succeeded or failed:
    1.  Ingress object exists.
    2.  Endpoint objects exist with matching names for each Ingress path (except when Service
        type is ExternalName).
    3.  Ingress entry exists for '.status.loadBalancer.ingress'.
    
    If the Ingress has not reached a Ready state after 10 minutes, it will
    time out and mark the resource update as Failed. You can override the default timeout value
    by setting the 'customTimeouts' option on the resource.
    Note that the timeout value for Delete is not yet supported. See
    https://github.com/pulumi/pulumi-kubernetes/issues/746 for details.
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

    metadata: pulumi.Output[dict]
    """
    Standard object's metadata. More info:
    https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
    """

    spec: pulumi.Output[dict]
    """
    Spec is the desired state of the Ingress. More info:
    https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
    """

    status: pulumi.Output[dict]
    """
    Status is the current state of the Ingress. More info:
    https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
    """

    def __init__(self, resource_name, opts=None, metadata=None, spec=None, __name__=None, __opts__=None):
        """
        Create a Ingress resource with the given unique name, arguments, and options.

        :param str resource_name: The _unique_ name of the resource.
        :param pulumi.ResourceOptions opts: A bag of options that control this resource's behavior.
        :param pulumi.Input[dict] metadata: Standard object's metadata. More info:
               https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
        :param pulumi.Input[dict] spec: Spec is the desired state of the Ingress. More info:
               https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
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

        __props__['apiVersion'] = 'networking.k8s.io/v1beta1'
        __props__['kind'] = 'Ingress'
        __props__['metadata'] = metadata
        __props__['spec'] = spec

        __props__['status'] = None

        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(version=version.get_version()))

        super(Ingress, self).__init__(
            "kubernetes:networking.k8s.io/v1beta1:Ingress",
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None):
        """
        Get the state of an existing `Ingress` resource, as identified by `id`.
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
        return Ingress(resource_name, opts)

    def translate_output_property(self, prop: str) -> str:
        return tables._CASING_FORWARD_TABLE.get(prop) or prop

    def translate_input_property(self, prop: str) -> str:
        return tables._CASING_BACKWARD_TABLE.get(prop) or prop
