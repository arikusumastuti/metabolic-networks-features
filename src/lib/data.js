const sidebarConfig = [
    {
        text: 'Overview',
        href: '/',
        icon: null,
        subs: [],
    },
    {
        text: 'PPI',
        href: null,
        icon: null,
        subs: [
            {
                text: 'GLUT4 Translocation',
                href: null,
                icon: null,
                subs: [
                    {
                        text: 'Compartments',
                        href: '/ppi/glut4-translocation/compartments',
                        icon: null,
                        subs: []
                    },
                    {
                        text: 'Proteins',
                        href: '/ppi/glut4-translocation/proteins',
                        icon: null,
                        subs: []
                    },
                    {
                        text: 'Parameters',
                        href: '/ppi/glut4-translocation/parameters',
                        icon: null,
                        subs: []
                    },
                    {
                        text: 'Reactions',
                        href: '/ppi/glut4-translocation/reactions',
                        icon: null,
                        subs: []
                    },
                ]
            },
            {
                text: 'GLUT4 Distranslocation',
                href: null,
                icon: null,
                subs: [
                    {
                        text: 'Compartments',
                        href: '/ppi/glut4-distranslocation/compartments',
                        icon: null,
                        subs: []
                    },
                    {
                        text: 'Proteins',
                        href: '/ppi/glut4-distranslocation/proteins',
                        icon: null,
                        subs: []
                    },
                    {
                        text: 'Parameters',
                        href: '/ppi/glut4-distranslocation/parameters',
                        icon: null,
                        subs: []
                    },
                    {
                        text: 'Reactions',
                        href: '/ppi/glut4-distranslocation/reactions',
                        icon: null,
                        subs: []
                    },
                ]
            },
            {
                text: 'Sythesis Protein (AMPK based)',
                href: null,
                icon: null,
                subs: [
                    {
                        text: 'Compartments',
                        href: '/ppi/synthesis-protein-ampk/compartments',
                        icon: null,
                        subs: []
                    },
                    {
                        text: 'Proteins',
                        href: '/ppi/synthesis-protein-ampk/proteins',
                        icon: null,
                        subs: []
                    },
                    {
                        text: 'Parameters',
                        href: '/ppi/synthesis-protein-ampk/parameters',
                        icon: null,
                        subs: []
                    },
                    {
                        text: 'Reactions',
                        href: '/ppi/synthesis-protein-ampk/reactions',
                        icon: null,
                        subs: []
                    },
                ]
            },
            {
                text: 'Sythesis Protein (mTOR based)',
                href: null,
                icon: null,
                subs: [
                    {
                        text: 'Compartments',
                        href: '/ppi/synthesis-protein-mtor/compartments',
                        icon: null,
                        subs: []
                    },
                    {
                        text: 'Proteins',
                        href: '/ppi/synthesis-protein-mtor/proteins',
                        icon: null,
                        subs: []
                    },
                    {
                        text: 'Parameters',
                        href: '/ppi/synthesis-protein-mtor/parameters',
                        icon: null,
                        subs: []
                    },
                    {
                        text: 'Reactions',
                        href: '/ppi/synthesis-protein-mtor/reactions',
                        icon: null,
                        subs: []
                    },
                ]
            },
        ]
    },
    {
        text: 'Metabolic Networks',
        href: null,
        icon: null,
        subs: [
            {
                text: 'T2DM',
                href: null,
                icon: null,
                subs: [
                    {
                        text: 'Compartments',
                        href: '/metabolic-networks/t2dm/compartments',
                        icon: null,
                        subs: []
                    },
                    {
                        text: 'Metabolites',
                        href: '/metabolic-networks/t2dm/metabolites',
                        icon: null,
                        subs: []
                    },
                    {
                        text: 'Genes',
                        href: '/metabolic-networks/t2dm/genes',
                        icon: null,
                        subs: []
                    },
                    {
                        text: 'Reactions',
                        href: '/metabolic-networks/t2dm/reactions',
                        icon: null,
                        subs: []
                    },
                ]
            },
            {
                text: 'Liver',
                href: null,
                icon: null,
                subs: [
                    {
                        text: 'Compartments',
                        href: '/metabolic-networks/liver/compartments',
                        icon: null,
                        subs: []
                    },
                    {
                        text: 'Metabolites',
                        href: '/metabolic-networks/liver/metabolites',
                        icon: null,
                        subs: []
                    },
                    {
                        text: 'Genes',
                        href: '/metabolic-networks/liver/genes',
                        icon: null,
                        subs: []
                    },
                    {
                        text: 'Reactions',
                        href: '/metabolic-networks/liver/reactions',
                        icon: null,
                        subs: []
                    },
                ]
            },
            {
                text: 'Enzymes Sources',
                href: '/',
                icon: null,
                subs: [
                    {
                        text: 'T2DM GWAS Catalog',
                        href: '/metabolic-networks/enzymes-sources/t2dm-gwas-catalog',
                        icon: null,
                        subs: []
                    },
                    {
                        text: 'Gene Info (GTEX based)',
                        href: '/metabolic-networks/enzymes-sources/gene-info',
                        icon: null,
                        subs: []
                    },
                    {
                        text: 'Abundance Enzymes (Combination from GWAS & Gene Info)',
                        href: '/metabolic-networks/enzymes-sources/abundance-enzymes',
                        icon: null,
                        subs: []
                    },
                ]
            },
        ]
    },
]

export default sidebarConfig;