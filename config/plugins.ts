export default ({ env }) => ({
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          s3Options: {
            // ✅ Wrap all S3 settings inside `s3Options`
            accessKeyId: env("AWS_ACCESS_KEY_ID"),
            secretAccessKey: env("AWS_SECRET_ACCESS_KEY"),
            region: env("AWS_REGION"),
            params: {
              Bucket: env("AWS_BUCKET_NAME"),
            },
          },
        //   baseUrl: env("AWS_BASE_URL", ""), // Optional: CDN or custom domain URL
        //   ACL: env("AWS_ACL", "public-read"), // ✅ Ensure ACL is outside `s3Options`
        //   signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
        },
        // actionOptions: {
        //   upload: {},
        //   uploadStream: {},
        //   delete: {},
        // },
      },
    },
  });