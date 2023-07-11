
'use strict';

function main(name) {
  // [START documentai_v1_generated_DocumentProcessorService_ProcessDocument_async]


  const inlineDocument = {}
  /**
   *  A raw document content (bytes).
   */
  const rawDocument = {}
  /**
   *  Required. The resource name of the
   *  Processor google.cloud.documentai.v1.Processor  or
   *  ProcessorVersion google.cloud.documentai.v1.ProcessorVersion 
   *  to use for processing. If a
   *  Processor google.cloud.documentai.v1.Processor  is specified, the server
   *  will use its default
   *  version google.cloud.documentai.v1.Processor.default_processor_version.
   *  Format: `projects/steam-lock-391908/locations/us/processors/UTILITY_PROCESSOR`,
   *  or
   *  `projects/steam-lock-391908/locations/us/processors/{processor}/processorVersions/{processorVersion}`
   */
   const name = 'projects/steam-lock-391908/locations/us/processors/UTILITY_PARSER'
  /**
   *  Whether human review should be skipped for this request. Default to
   *  `false`.
   */
  const skipHumanReview = true
  /**
   *  Specifies which fields to include in the
   *  ProcessResponse.document google.cloud.documentai.v1.ProcessResponse.document 
   *  output. Only supports top-level document and pages field, so it must be in
   *  the form of `{document_field_name}` or `pages.{page_field_name}`.
   */
 const fieldMask = {receiver_name}

  const {DocumentProcessorServiceClient} = require('@google-cloud/documentai').v1;

  // Instantiates a client
  const documentaiClient = new DocumentProcessorServiceClient();

  async function callProcessDocument() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await documentaiClient.processDocument(request);
    console.log(response);
  }

  callProcessDocument();
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));