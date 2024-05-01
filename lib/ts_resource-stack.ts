import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class TsResourceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //Create an L2 construct for S3 Bucket that deletes on stack destroy
    const bucket1 = new Bucket(this, "KishoreBuck123", {
          versioned: true, 
          removalPolicy: cdk.RemovalPolicy.DESTROY
    });

  }
}

