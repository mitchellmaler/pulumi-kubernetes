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
     * Status is a return value for calls that don't return other objects.
     */
    export class Status extends pulumi.CustomResource {
      /**
       * APIVersion defines the versioned schema of this representation of an object. Servers should
       * convert recognized schemas to the latest internal value, and may reject unrecognized
       * values. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
       */
      public readonly apiVersion: pulumi.Output<"v1">;

      /**
       * Suggested HTTP return code for this status, 0 if not set.
       */
      public readonly code: pulumi.Output<number>;

      /**
       * Extended data associated with the reason.  Each reason may define its own extended details.
       * This field is optional and the data returned is not guaranteed to conform to any schema
       * except that defined by the reason type.
       */
      public readonly details: pulumi.Output<outputs.meta.v1.StatusDetails>;

      /**
       * Kind is a string value representing the REST resource this object represents. Servers may
       * infer this from the endpoint the client submits requests to. Cannot be updated. In
       * CamelCase. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
       */
      public readonly kind: pulumi.Output<"Status">;

      /**
       * A human-readable description of the status of this operation.
       */
      public readonly message: pulumi.Output<string>;

      /**
       * Standard list metadata. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
       */
      public readonly metadata: pulumi.Output<outputs.meta.v1.ListMeta>;

      /**
       * A machine-readable description of why this operation is in the "Failure" status. If this
       * value is empty there is no information available. A Reason clarifies an HTTP status code
       * but does not override it.
       */
      public readonly reason: pulumi.Output<string>;

      /**
       * Status of the operation. One of: "Success" or "Failure". More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
       */
      public readonly status: pulumi.Output<string>;

      /**
       * Get the state of an existing `Status` resource, as identified by `id`.
       * The ID is of the form `[namespace]/<name>`; if `namespace` is omitted, then (per
       * Kubernetes convention) the ID becomes `default/<name>`.
       *
       * Pulumi will keep track of this resource using `name` as the Pulumi ID.
       *
       * @param name _Unique_ name used to register this resource with Pulumi.
       * @param id An ID for the Kubernetes resource to retrieve. Takes the form `[namespace]/<name>`.
       * @param opts Uniquely specifies a CustomResource to select.
       */
      public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Status {
          return new Status(name, undefined, { ...opts, id: id });
      }

      /** @internal */
      private static readonly __pulumiType = "kubernetes:core/v1:Status";

      /**
       * Returns true if the given object is an instance of Status.  This is designed to work even
       * when multiple copies of the Pulumi SDK have been loaded into the same process.
       */
      public static isInstance(obj: any): obj is Status {
          if (obj === undefined || obj === null) {
              return false;
          }

          return obj["__pulumiType"] === Status.__pulumiType;
      }

      /**
       * Create a meta.v1.Status resource with the given unique name, arguments, and options.
       *
       * @param name The _unique_ name of the resource.
       * @param args The arguments to use to populate this resource's properties.
       * @param opts A bag of options that control this resource's behavior.
       */
      constructor(name: string, args?: inputs.meta.v1.Status, opts?: pulumi.CustomResourceOptions) {
          const props: pulumi.Inputs = {};

          props["apiVersion"] = "v1";
          props["code"] = args && args.code || undefined;
          props["details"] = args && args.details || undefined;
          props["kind"] = "Status";
          props["message"] = args && args.message || undefined;
          props["metadata"] = args && args.metadata || undefined;
          props["reason"] = args && args.reason || undefined;

          props["status"] = undefined;

          if (!opts) {
              opts = {};
          }

          if (!opts.version) {
              opts.version = getVersion();
          }
          super(Status.__pulumiType, name, props, opts);
      }
    }
