import { Paper, Typography } from "@material-ui/core";

function Footer() {
  return (
    <Paper
      elevation={3}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="body1" align="center">
        Made with ❤️ by nbamford123 &{" "}
        <a
          href="https://copilot.github.com/"
          target="_blank"
          rel="noreferrer"
          alt="GitHub Copilot"
        >
          GitHub Copilot
        </a>
      </Typography>
      <Typography variant="body1" align="center">
        Powered by{" "}
        <a
          href="https://openai.com/"
          target="_blank"
          rel="noreferrer"
          alt="openai api"
        >
          OpenAI
        </a>
      </Typography>
    </Paper>
  );
}

export default Footer;
