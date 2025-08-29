const log = (name: string) => (...args: any[]) =>
  console.info(`[${name}]`, ...args)

export const useRouter = () => ({
  push: (href: string) => log('router.push')(href),
  replace: (href: string) => log('router.replace')(href),
  prefetch: async (_href: string) => {},
  back: () => log('router.back')(),
  forward: () => log('router.forward')(),
  refresh: () => log('router.refresh')(),
})

export const usePathname = () => '/'
export const useSearchParams = () => new URLSearchParams('')

export const redirect = (url: string) => log('next/navigation redirect')(url)
export const notFound = () => log('next/navigation notFound')()
export const permanentRedirect = (url: string) =>
  log('next/navigation permanentRedirect')(url)

