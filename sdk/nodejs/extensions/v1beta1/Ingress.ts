// Copyright 2016-2019, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { core } from "../..";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import { getVersion } from "../../version";

    /**
     * Ingress is a collection of rules that allow inbound connections to reach the endpoints
     * defined by a backend. An Ingress can be configured to give services externally-reachable
     * urls, load balance traffic, terminate SSL, offer name based virtual hosting etc. DEPRECATED -
     * This group version of Ingress is deprecated by networking.k8s.io/v1beta1 Ingress. See the
     * release notes for more information.
     * 
     * This resource waits until it is ready before registering success for
     * create/update and populating output properties from the current state of the resource.
     * The following conditions are used to determine whether the resource creation has
     * succeeded or failed:
     * 1.  Ingress object exists.
     * 2.  Endpoint objects exist with matching names for each Ingress path (except when Service
     *     type is ExternalName).
     * 3.  Ingress entry exists for '.status.loadBalancer.ingress'.
     * 
     * If the Ingress has not reached a Ready state after 10 minutes, it will
     * time out and mark the resource update as Failed. You can override the default timeout value
     * by setting the 'customTimeouts' option on the resource.
     * Note that the timeout value for Delete is not yet supported. See
     * https://github.com/pulumi/pulumi-kubernetes/issues/746 for details.
     */
    export class Ingress extends pulumi.CustomResource {
      /**
       * APIVersion defines the versioned schema of this representation of an object. Servers should
       * convert recognized schemas to the latest internal value, and may reject unrecognized
       * values. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
       */
      public readonly apiVersion: pulumi.Output<"extensions/v1beta1">;

      /**
       * Kind is a string value representing the REST resource this object represents. Servers may
       * infer this from the endpoint the client submits requests to. Cannot be updated. In
       * CamelCase. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
       */
      public readonly kind: pulumi.Output<"Ingress">;

      /**
       * Standard object's metadata. More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
       */
      public readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMeta>;

      /**
       * Spec is the desired state of the Ingress. More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
       */
      public readonly spec: pulumi.Output<outputs.extensions.v1beta1.IngressSpec>;

      /**
       * Status is the current state of the Ingress. More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
       */
      public readonly status: pulumi.Output<outputs.extensions.v1beta1.IngressStatus>;

      /**
       * Get the state of an existing `Ingress` resource, as identified by `id`.
       * The ID is of the form `[namespace]/<name>`; if `namespace` is omitted, then (per
       * Kubernetes convention) the ID becomes `default/<name>`.
       *
       * Pulumi will keep track of this resource using `name` as the Pulumi ID.
       *
       * @param name _Unique_ name used to register this resource with Pulumi.
       * @param id An ID for the Kubernetes resource to retrieve. Takes the form `[namespace]/<name>`.
       * @param opts Uniquely specifies a CustomResource to select.
       */
      public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Ingress {
          return new Ingress(name, undefined, { ...opts, id: id });
      }

      /** @internal */
      private static readonly __pulumiType = "kubernetes:extensions/v1beta1:Ingress";

      /**
       * Returns true if the given object is an instance of Ingress.  This is designed to work even
       * when multiple copies of the Pulumi SDK have been loaded into the same process.
       */
      public static isInstance(obj: any): obj is Ingress {
          if (obj === undefined || obj === null) {
              return false;
          }

          return obj["__pulumiType"] === Ingress.__pulumiType;
      }

      /**
       * Create a extensions.v1beta1.Ingress resource with the given unique name, arguments, and options.
       *
       * @param name The _unique_ name of the resource.
       * @param args The arguments to use to populate this resource's properties.
       * @param opts A bag of options that control this resource's behavior.
       */
      constructor(name: string, args?: inputs.extensions.v1beta1.Ingress, opts?: pulumi.CustomResourceOptions) {
          const props: pulumi.Inputs = {};

          props["apiVersion"] = "extensions/v1beta1";
          props["kind"] = "Ingress";
          props["metadata"] = args && args.metadata || undefined;
          props["spec"] = args && args.spec || undefined;

          props["status"] = undefined;

          if (!opts) {
              opts = {};
          }

          if (!opts.version) {
              opts.version = getVersion();
          }
          super(Ingress.__pulumiType, name, props, opts);
      }
    }
