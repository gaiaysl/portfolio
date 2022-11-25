
import styles from '../styles/Home.module.css'
const navigation = [
 
  { name: 'Home', href: '#', current: false },
  { name: 'About Me', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Footer(){
    return(
        <div  className={styles.footer}>
         <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-small'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
       
        </div>
    )
}