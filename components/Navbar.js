import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import DarkMode from '../components/DarkMode'
const navigation = [
 
  { name: 'Home', href: '#home', current: false },
  { name: 'About Me', href:'#aboutme', current: false },
  { name: 'Works', href:'#works', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" >
      {({ open }) => (
        <>
          <div className="  mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className=" text-center absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="  inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="dark:text-white text-gray-600 flex font-medium flex-shrink-0  hidden sm:block ">
                 GaiaDesign
                </div>
              <div className="flex flex-1 items-center   sm:items-stretch sm:justify-end">
                
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 flex-row items-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames (
                          item.current ? 'bg-gray-600 ' : 'dark:text-white text-gray-600 transition-all hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-small '
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                      
                    ))}
                     <DarkMode/>
                  </div>
                
                </div>
              </div>
          
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
             
            </div>
            
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
