
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Car, Menu, X, BarChart3, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <div className="flex items-center">
                <Car className="h-8 w-8 text-primary" />
                <span className="ml-2 text-xl font-bold text-gray-800">ParkVista</span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link to="/#features" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-primary">
              Características
            </Link>
            <Link to="/#tariffs" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-primary">
              Tarifas
            </Link>
            <Link to="/#locations" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-primary">
              Ubicaciones
            </Link>
            <Link to="/reports" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-primary">
              <BarChart3 className="mr-1 h-4 w-4" />
              Informes
            </Link>
            <Link to="/admin" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-primary">
              <Settings className="mr-1 h-4 w-4" />
              Administración
            </Link>
            <Link to="/#contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-primary">
              Contacto
            </Link>
          </div>

          <div className="hidden sm:flex items-center">
            <Link to="/#login">
              <Button variant="outline" className="mr-2">Iniciar Sesión</Button>
            </Link>
            <Link to="/#login">
              <Button>Registrarse</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              to="/#features" 
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Características
            </Link>
            <Link 
              to="/#tariffs" 
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Tarifas
            </Link>
            <Link 
              to="/#locations" 
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Ubicaciones
            </Link>
            <Link 
              to="/reports" 
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <BarChart3 className="mr-1 h-4 w-4" />
                Informes
              </div>
            </Link>
            <Link 
              to="/admin" 
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <Settings className="mr-1 h-4 w-4" />
                Administración
              </div>
            </Link>
            <Link 
              to="/#contact" 
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <div className="mt-4 flex flex-col space-y-2 px-3">
              <Link to="/#login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">Iniciar Sesión</Button>
              </Link>
              <Link to="/#login" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Registrarse</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
