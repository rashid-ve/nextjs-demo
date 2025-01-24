import "client-only";
import { useTheme } from "../context/theme-provider";
import { clientSideFunction } from "../utils/client-utils";

export default function ClientPage() {
  const theme = useTheme();
  const result = clientSideFunction();

  return (
    <>
      <h1 style={{ color: theme.colors.primary }}>
        This is client router page
      </h1>
      <p>{result}</p>
    </>
  );
}
