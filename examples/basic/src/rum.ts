import { AwsRum, AwsRumConfig } from 'aws-rum-web';

try {
  const config: AwsRumConfig = {
    sessionSampleRate: 1,
    guestRoleArn: "arn:aws:iam::775344198257:role/RUM-Monitor-us-west-2-775344198257-6621452634861-Unauth",
    identityPoolId: "us-west-2:b42084c8-2459-4c6f-8926-785908b1896c",
    endpoint: "https://dataplane.rum.us-west-2.amazonaws.com",
    telemetries: ["performance","errors","http"],
    allowCookies: true,
    enableXRay: false
  };

  const APPLICATION_ID: string = '513c9d92-de78-4c6a-ba80-09e1ce6d6f33';
  const APPLICATION_VERSION: string = '1.0.0';
  const APPLICATION_REGION: string = 'us-west-2';

  const awsRum: AwsRum = new AwsRum(
    APPLICATION_ID,
    APPLICATION_VERSION,
    APPLICATION_REGION,
    config
  );
} catch (error) {
  // Ignore errors thrown during CloudWatch RUM web client initialization
}