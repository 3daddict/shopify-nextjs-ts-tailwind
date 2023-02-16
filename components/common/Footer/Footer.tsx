export const Footer = () => {
  return (
    <footer className="pt-1 bg-black">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center mt-5">
          <div className="py-6">
            <p className="mb-6 text-sm font-bold text-primary-2">
              © {new Date().getFullYear()} GTFOL
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
