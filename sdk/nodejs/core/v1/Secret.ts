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
     * Secret holds secret data of a certain type. The total bytes of the values in the Data field
     * must be less than MaxSecretSize bytes.
     */
    export class Secret extends pulumi.CustomResource {
      /**
       * APIVersion defines the versioned schema of this representation of an object. Servers should
       * convert recognized schemas to the latest internal value, and may reject unrecognized
       * values. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
       */
      public readonly apiVersion: pulumi.Output<"v1">;

      /**
       * Data contains the secret data. Each key must consist of alphanumeric characters, '-', '_'
       * or '.'. The serialized form of the secret data is a base64 encoded string, representing the
       * arbitrary (possibly non-string) data value here. Described in
       * https://tools.ietf.org/html/rfc4648#section-4
       */
      public readonly data: pulumi.Output<object>;

      /**
       * Kind is a string value representing the REST resource this object represents. Servers may
       * infer this from the endpoint the client submits requests to. Cannot be updated. In
       * CamelCase. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
       */
      public readonly kind: pulumi.Output<"Secret">;

      /**
       * Standard object's metadata. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
       */
      public readonly metadata: pulumi.Output<outputs.meta.v1.ObjectMeta>;

      /**
       * stringData allows specifying non-binary secret data in string form. It is provided as a
       * write-only convenience method. All keys and values are merged into the data field on write,
       * overwriting any existing values. It is never output when reading from the API.
       */
      public readonly stringData: pulumi.Output<{[key: string]: pulumi.Output<string>}>;

      /**
       * Used to facilitate programmatic handling of secret data.
       */
      public readonly type: pulumi.Output<string>;

      /**
       * Get the state of an existing `Secret` resource, as identified by `id`.
       * The ID is of the form `[namespace]/<name>`; if `namespace` is omitted, then (per
       * Kubernetes convention) the ID becomes `default/<name>`.
       *
       * Pulumi will keep track of this resource using `name` as the Pulumi ID.
       *
       * @param name _Unique_ name used to register this resource with Pulumi.
       * @param id An ID for the Kubernetes resource to retrieve. Takes the form `[namespace]/<name>`.
       * @param opts Uniquely specifies a CustomResource to select.
       */
      public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Secret {
          return new Secret(name, undefined, { ...opts, id: id });
      }

      /** @internal */
      private static readonly __pulumiType = "kubernetes:core/v1:Secret";

      /**
       * Returns true if the given object is an instance of Secret.  This is designed to work even
       * when multiple copies of the Pulumi SDK have been loaded into the same process.
       */
      public static isInstance(obj: any): obj is Secret {
          if (obj === undefined || obj === null) {
              return false;
          }

          return obj["__pulumiType"] === Secret.__pulumiType;
      }

      /**
       * Create a core.v1.Secret resource with the given unique name, arguments, and options.
       *
       * @param name The _unique_ name of the resource.
       * @param args The arguments to use to populate this resource's properties.
       * @param opts A bag of options that control this resource's behavior.
       */
      constructor(name: string, args?: inputs.core.v1.Secret, opts?: pulumi.CustomResourceOptions) {
          const props: pulumi.Inputs = {};

          props["apiVersion"] = "v1";
          props["data"] = args && args.data || undefined;
          props["kind"] = "Secret";
          props["metadata"] = args && args.metadata || undefined;
          props["stringData"] = args && args.stringData || undefined;
          props["type"] = args && args.type || undefined;

          props["status"] = undefined;

          if (!opts) {
              opts = {};
          }

          if (!opts.version) {
              opts.version = getVersion();
          }
          super(Secret.__pulumiType, name, props, opts);
      }
    }
