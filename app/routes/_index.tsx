import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'NFT Preview Card Component' },
    { name: 'description', content: 'A Challenge from Frontend Mentor!' },
  ]
}

export default function Index() {
  return (
    <main className="max-w-[21.875rem] px-6 py-[3.88rem]">
      <div className="rounded-[0.9375rem] bg-darker-blue-2 p-6">
        <div className="relative cursor-pointer">
          <picture>
            <source srcSet="/images/image-equilibrium.jpg" type="image/jpg" />
            <img src="/images/image-equilibrium.jpg" alt="Equilibrium" className="mb-6 rounded-lg" />
          </picture>
          <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-lg  bg-cyan bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
            <picture>
              <source srcSet="/images/icon-view.svg" type="image/svg+xml" />
              <img src="/images/icon-view.svg" alt="Icon View" />
            </picture>
          </div>
        </div>
        <a href="#" className="cursor-pointer hover:text-cyan">
          <h1 className="mb-4 text-[1.375rem] font-semibold">Equilibrium #3429</h1>
        </a>
        <p className="text-lg font-light leading-[1.625rem] text-soft-blue">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex border-b border-dark-blue-1 py-4">
          <div className="flex items-center gap-2">
            <picture>
              <source srcSet="/images/icon-ethereum.svg" type="image/svg+xml" />
              <img src="/images/icon-ethereum.svg" alt="Ethereum" />
            </picture>
            <span className="text-[0.9375rem] font-semibold text-cyan">0.041 ETH</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <picture>
              <source srcSet="/images/icon-clock.svg" type="image/svg+xml" />
              <img src="/images/icon-clock.svg" alt="Clock" />
            </picture>
            <span className="text-[0.9375rem] font-semibold text-soft-blue">3 days left</span>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <picture>
            <source srcSet="/images/image-avatar.png" type="image/png" />
            <img
              src="/images/image-avatar.png"
              alt="Avatar"
              className="h-[2.0625rem] w-[2.0625rem] rounded-full border border-white"
            />
          </picture>
          <p className="text-[0.9375rem]">
            <span className="text-soft-blue">Creation of</span>{' '}
            <a href="#" className="cursor-pointer hover:text-cyan">
              Jules Wyvern
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
