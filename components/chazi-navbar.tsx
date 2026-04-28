/**
 * Create By SheniraSelva.
 * Contact Me on t.me/nira6core
 * Follow https://github.com/sheniraid
 */

"use client"

import { Home, BookOpen, Terminal, BarChart3, Mail, Award } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/about", icon: BookOpen, label: "About" },
    { href: "/skills", icon: Terminal, label: "Skills" },
    { href: "/projects", icon: BarChart3, label: "Projects" },
    { href: "/certificates", icon: Award, label: "Certs" },
    { href: "/contact", icon: Mail, label: "Contact" },
  ]

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 md:hidden backdrop-blur-xl border-t border-primary/40 z-50 rounded-t-3xl shadow-2xl shadow-primary/20"
      style={{
        backgroundImage: `url('https://lannytourl.vestia.icu/api/file/69264e03ef0f1355a89d2013.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="flex items-center justify-around h-20 px-2 bg-black/60 rounded-t-3xl">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center w-full h-full gap-1.5 transition-all duration-300 ${
                isActive
                  ? "text-primary border-t-2 border-primary bg-primary/10"
                  : "text-foreground/50 hover:text-primary hover:bg-white/10"
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-80 bg-background z-[70] md:hidden shadow-2xl flex flex-col"
              style={{ willChange: "transform" }} // Optimasi GPU
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/40">
                  <div className="flex items-center gap-3">
                    <CircularLogo size={40} />
                    <span className="text-xl font-bold">Nourv6s</span>
                  </div>
                  <Button variant="ghost" size="icon" onClick={toggleMenu} className="rounded-xl">
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <nav className="flex flex-col gap-3 flex-1 overflow-y-auto custom-scrollbar">
                  {menuItems.map((item) => (
                    <motion.div key={item.label} variants={itemVariants}>
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className="group flex items-center gap-4 p-3 rounded-xl bg-card/40 border border-border/20 hover:border-primary/40 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-semibold block">{item.label}</span>
                          <span className="text-[10px] text-muted-foreground">Open {item.label}</span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="pt-4 mt-auto border-t border-border/40 text-center">
                  <p className="text-[10px] text-muted-foreground opacity-50">© 2026 Nourv6s</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
