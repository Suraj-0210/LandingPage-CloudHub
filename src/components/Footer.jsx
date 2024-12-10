function Footer() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4">
        {/* Footer container */}
        <div className="flex md:flex-row flex-col justify-start gap-10 md:gap-[200px] items-start mb-8">
          {/* Logo */}
          <div className="md:w-[60px] w-[50px] md:h-[60px] h-[50px]">
            <img
              src="/images/iconTM-01.svg"
              alt="ThinkMetal logo"
              className="object-contain"
            />
          </div>
          {/* Footer Links */}
          <div className="flex md:flex-row flex-col md:gap-[100px] gap-10">
            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-4">Product</h4>
              <ul className="space-y-2 text-gray-500">
                <li>Features</li>
                <li>Pricing</li>
                <li>Changelog</li>
                <li>Support</li>
              </ul>
            </div>
            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-500">
                <li>Terms of Privacy</li>
                <li>Privacy Policy</li>
                <li>Security</li>
              </ul>
            </div>
            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-500">
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-4">Social</h4>
              <ul className="space-y-2 text-gray-500">
                <li>Dribbble</li>
                <li>Behance</li>
                <li>Discord</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom text */}
        <div className="text-center text-gray-500 text-sm">
          All rights reserved. © 2024 ThinkMetal
        </div>
      </div>
    </div>
  );
}

export default Footer;
