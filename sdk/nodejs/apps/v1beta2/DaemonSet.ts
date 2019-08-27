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
     * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1/DaemonSet. See the
     * release notes for more information. DaemonSet represents the configuration of a daemon set.
     */
    export class DaemonSet extends pulumi.CustomResource {
      /**
       * APIVersion defines the versioned schema of this representation of an object. Servers should
       * convert recognized schemas to the latest internal value, and may reject unrecognized
       * values. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
       */
      public readonly apiVersion: pulumi.Output<"apps/v1beta2">;

      /**
       * Kind is a string value representing the REST resource this object represents. Servers may
       * infer this from the endpoint the client submits requests to. Cannot be updated. In
       * CamelCase. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
       */
      public readonly kind: pulumi.Output<"DaemonSet">;

      /**
       * Standard object's metadata. More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
       */
      public readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMeta>;

      /**
       * The desired behavior of this daemon set. More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
       */
      public readonly spec: pulumi.Output<outputs.apps.v1beta2.DaemonSetSpec>;

      /**
       * The current status of this daemon set. This data may be out of date by some window of time.
       * Populated by the system. Read-only. More info:
       * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
       */
      public readonly status: pulumi.Output<outputs.apps.v1beta2.DaemonSetStatus>;

      /**
       * Get the state of an existing `DaemonSet` resource, as identified by `id`.
       * The ID is of the form `[namespace]/<name>`; if `namespace` is omitted, then (per
       * Kubernetes convention) the ID becomes `default/<name>`.
       *
       * Pulumi will keep track of this resource using `name` as the Pulumi ID.
       *
       * @param name _Unique_ name used to register this resource with Pulumi.
       * @param id An ID for the Kubernetes resource to retrieve. Takes the form `[namespace]/<name>`.
       * @param opts Uniquely specifies a CustomResource to select.
       */
      public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DaemonSet {
          return new DaemonSet(name, undefined, { ...opts, id: id });
      }

      /** @internal */
      private static readonly __pulumiType = "kubernetes:apps/v1beta2:DaemonSet";

      /**
       * Returns true if the given object is an instance of DaemonSet.  This is designed to work even
       * when multiple copies of the Pulumi SDK have been loaded into the same process.
       */
      public static isInstance(obj: any): obj is DaemonSet {
          if (obj === undefined || obj === null) {
              return false;
          }

          return obj["__pulumiType"] === DaemonSet.__pulumiType;
      }

      /**
       * Create a apps.v1beta2.DaemonSet resource with the given unique name, arguments, and options.
       *
       * @param name The _unique_ name of the resource.
       * @param args The arguments to use to populate this resource's properties.
       * @param opts A bag of options that control this resource's behavior.
       */
      constructor(name: string, args?: inputs.apps.v1beta2.DaemonSet, opts?: pulumi.CustomResourceOptions) {
          const props: pulumi.Inputs = {};

          props["apiVersion"] = "apps/v1beta2";
          props["kind"] = "DaemonSet";
          props["metadata"] = args && args.metadata || undefined;
          props["spec"] = args && args.spec || undefined;

          props["status"] = undefined;

          if (!opts) {
              opts = {};
          }

          if (!opts.version) {
              opts.version = getVersion();
          }
          super(DaemonSet.__pulumiType, name, props, opts);
      }
    }
