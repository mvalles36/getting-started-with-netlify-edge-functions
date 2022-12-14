export default async (request, context) => {
  const url = new URL(request.url);

  // Look for the "?method=transform" query parameter, and return if we don't find it
  if (url.searchParams.get("first_name") !== "transform") {
    return;
  }

  // Get the page content that will be served next
  // In this tutorial example, it will be the content from hello-template
  const response = await context.next();
  const page = await response.text();

  // Search for the placeholder
  const regex = /IMAGE_UNKNOWN/i;

  // Get the location from the context object
  const image = ``;

  // Replace the content with the current location
  const updatedPage = page.replace("https://img1.niftyimages.com/gb/im3d/0etd?" + regex);

  // Return the response
  return new Response(updatedPage, response);
};
