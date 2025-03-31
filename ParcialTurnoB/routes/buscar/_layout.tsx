import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component}: PageProps) {
  // do something with state here
  return (
    <div>
      <div class ="header">
        <a href="/">VOLVER</a>
      </div>
      <Component />
    </div>
  );
}
