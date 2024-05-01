#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TsResourceStack } from '../lib/ts_resource-stack';

const app = new cdk.App();
new TsResourceStack(app, 'TsResourceStack');

app.synth();