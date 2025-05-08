import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <section className="c-space pt-1 pb-3 border-black flex justify-between items-center flex-wrap gap-4">
      <div
        className="text-white flex gap-2"
        style={{ color: "var(--color-white-500)" }}
      >
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-4">
        <div className="flex gap-3">
          <a
            href="https://github.com/ShadowedHeart"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-icon">
              <img
                src="/assets/github.svg"
                alt="github"
                className="w-1/2 h-1/2"
              />
            </div>
          </a>
        </div>

        <div className="flex gap-3">
          <a
            href="https://www.instagram.com/__d.a.r.k_s.o.u.l?igsh=MXR6dzB0amxid2Y1Mw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-icon">
              <img
                src="/assets/instagram.svg"
                alt="twitter"
                className="w-1/2 h-1/2"
              />
            </div>
          </a>
        </div>

        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/pravesh-subba-53426a24b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-icon">
              <LinkedInIcon sx={{ color: "white" }} />
            </div>
          </a>
        </div>
      </div>

      <p style={{ color: "var(--color-white-500)" }}>
        © 2025 Pravesh. All rights reserved.{" "}
      </p>
    </section>
  );
};

export default Footer;
