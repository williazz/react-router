import { AwsRum, AwsRumConfig } from 'aws-rum-web';

try {
  const config: AwsRumConfig = {
    sessionSampleRate: 1,
    guestRoleArn: "arn:aws:iam::775344198257:role/RUM-Monitor-us-west-2-775344198257-3078778534861-Unauth",
    identityPoolId: "us-west-2:8132b5f5-d150-4b43-8a37-44112286f419",
    endpoint: "https://dataplane.rum.us-west-2.amazonaws.com",
    telemetries: ["performance","errors","http"],
    allowCookies: true,
    enableXRay: false
  };

  const APPLICATION_ID: string = 'dd100ed7-9fc4-41fc-9dfd-1712f8c52e79';
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