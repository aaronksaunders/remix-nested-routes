import Amplify from "aws-amplify";
import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";



Amplify.configure({
    Auth: {
      userPoolId: "us-east-1_qofS3ef2G", //UserPool ID
      region: "us-east-1",
      userPoolWebClientId: "3sf04j3a9jpbh04k2be061r0a8", //WebClientId
    },
  });

hydrate(<RemixBrowser />, document);
