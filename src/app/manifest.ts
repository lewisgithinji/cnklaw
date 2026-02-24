import { MetadataRoute } from 'next'
import { FIRM_INFO } from '@/lib/constants'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: FIRM_INFO.name,
        short_name: 'CNK Law',
        description: FIRM_INFO.description,
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#1a1a1a',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/cnklogo.png',
                sizes: '1374x1196',
                type: 'image/png',
            },
        ],
    }
}
