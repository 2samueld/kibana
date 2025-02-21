/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { schema, TypeOf } from '@kbn/config-schema';
import { PluginConfigDescriptor } from 'src/core/server';

export const config: PluginConfigDescriptor = {
  deprecations: ({ deprecate, unused }) => [
    deprecate('enabled', '8.0.0'),
    unused('unsafe.indexUpgrade.enabled'),
  ],
  schema: schema.object({
    enabled: schema.boolean({ defaultValue: true }),
    write: schema.object({
      enabled: schema.boolean({ defaultValue: false }),
    }),
    unsafe: schema.object({
      legacyMultiTenancy: schema.object({
        enabled: schema.boolean({ defaultValue: false }),
      }),
      indexUpgrade: schema.object({
        enabled: schema.boolean({ defaultValue: false }),
      }),
    }),
  }),
};

export type RuleRegistryPluginConfig = TypeOf<typeof config.schema>;

export const INDEX_PREFIX = '.alerts' as const;
export const INDEX_PREFIX_FOR_BACKING_INDICES = '.internal.alerts' as const;
