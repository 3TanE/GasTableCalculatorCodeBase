const inputFieldsConf = [
  {
    machNumber: {
      id: 'machNumber',
      label: 'M',
      sanityCheck: (value) => {
        if (value === '' || (value >= 0 && value <= 1)) return true;
        return false;
      },
      error: '0 \\leq M \\leq 1',
      toM: (m) => (m),
      fromM: (m) => (m),
      width: 150,
    },
    pToP0: {
      id: 'pToP0',
      label: ' \\frac{p}{p_0} ',
      sanityCheck: (value) => {
        if (value === '' || (value >= 0.52828 && value <= 1)) return true;
        return false;
      },
      error: '0.52828 \\leq \\frac{p}{p_0} \\leq 1',
      toM: (x) => ((5 ** (0.5)) * (x ** (-2 / 7) - 1) ** 0.5),
      fromM: (m) => ((1 + m ** 2 / 5) ** (-3.5)),
      width: 150,
    },
    rhoToRho0: {
      id: 'rhoToRho0',
      label: ' \\frac{\\rho}{\\rho_0} ',
      sanityCheck: (value) => {
        if (value === '' || (value >= 0.633938145260609 && value <= 1)) return true;
        return false;
      },
      error: '0.63394 \\leq \\frac{\\rho}{\\rho_0} \\leq 1',
      toM: (x) => ((5 ** (0.5)) * (x ** (-2 / 5) - 1) ** 0.5),
      fromM: (m) => ((1 + m ** 2 / 5) ** (-2.5)),
      width: 150,
    },
    tToT0: {
      id: 'tToT0',
      label: ' \\frac{T}{T_0} ',
      sanityCheck: (value) => {
        if (value === '' || (value >= 0.83333 && value <= 1)) return true;
        return false;
      },
      error: '0.83333 \\leq \\frac{T}{T_0} \\leq 1',
      toM: (x) => (((5 - 5 * x) ** 0.5) / (x) ** 0.5),
      fromM: (m) => (5 / (5 + (m ** 2))),
      width: 150,
    },
    aToA0: {
      id: 'aToA0',
      label: ' \\frac{a}{a_0} ',
      sanityCheck: (value) => {
        if (value === '' || (value >= 0.91287 && value <= 1)) return true;
        return false;
      },
      error: '0.91287 \\leq \\frac{a}{a_0} < 1',
      toM: (x) => (((5 ** (0.5)) * (1 - x * x) ** 0.5) / x),
      fromM: (m) => ((1 + m ** 2 / 5) ** (-0.5)),
      width: 150,
    },
    aStarToA0: {
      id: 'aStarToA0',
      label: ' \\frac{A^\\star}{A} ',
      sanityCheck: (value) => {
        if (value === '' || (value >= 0 && value <= 1)) return true;
        return false;
      },
      error: '0 \\leq \\frac{A^\\star}{A} \\leq 1',
      disabled: true,
      toM: (x) => (x),
      fromM: (m) => {
        const value = m * (6 / (5 + m * m)) ** 3;
        return value === 0 ? '0' : value;
      },
      width: 150,
    },
    CP0: {
      id: 'CP0',
      label: 'Cp_0',
      sanityCheck: (value) => {
        if (value === '' || (value >= 0 && value <= 1.2756130839112199)) return true;
        return false;
      },
      error: '0 \\leq Cp_0 \\leq 1.27561',
      disabled: true,
      toM: (x) => (x),
      fromM: (m) => {
        const value = (((1 + (m * m) / 5) ** (3.5) - 1) / (0.7 * m * m));
        return Number.isNaN(value) ? '0' : value;
      },
      width: 150,
    },
  },
  {
    machNumber: {
      id: 'machNumber',
      label: 'M',
      sanityCheck: (value) => {
        if (value === '' || (value >= 1 && value <= 50)) return true;
        return false;
      },
      error: '1 \\leq M \\leq 50',
      toM: (m) => (m),
      fromM: (m) => (m),
      width: 150,
    },
    pToP0: {
      id: 'pToP0',
      label: ' \\frac{p}{p_0} ',
      sanityCheck: (value) => {
        if (value === '' || (value > 0 && value <= 0.5282817877171742)) return true;
        return false;
      },
      error: '0 < \\frac{p}{p_0} \\leq 0.52828',
      toM: (x) => ((5 ** (0.5)) * (x ** (-2 / 7) - 1) ** 0.5),
      fromM: (m) => ((1 + m ** 2 / 5) ** (-3.5)),
      width: 150,
    },
    rhoToRho0: {
      id: 'rhoToRho0',
      label: ' \\frac{\\rho}{\\rho_0} ',
      sanityCheck: (value) => {
        if (value === '' || (value > 0 && value <= 0.633941)) return true;
        return false;
      },
      error: ' 0< \\frac{\\rho}{\\rho_0} \\leq 0.63394',
      toM: (x) => ((5 ** (0.5)) * (x ** (-2 / 5) - 1) ** 0.5),
      fromM: (m) => ((1 + m ** 2 / 5) ** (-2.5)),
      width: 150,
    },
    tToT0: {
      id: 'tToT0',
      label: ' \\frac{T}{T_0} ',
      sanityCheck: (value) => {
        if (value === '' || (value >= 0.00199600798403193 && value <= 0.8333333333333334)) return true;
        return false;
      },
      error: ' 0.002 \\leq \\frac{T}{T_0} \\leq 0.83333',
      toM: (x) => (((5 - 5 * x) ** 0.5) / (x) ** 0.5),
      fromM: (m) => (5 / (5 + (m ** 2))),
      width: 150,
    },
    aToA0: {
      id: 'aToA0',
      label: ' \\frac{a}{a_0} ',
      sanityCheck: (value) => {
        if (value === '' || (value >= 0.04467670516087703 && value <= 0.9128709291752769)) return true;
        return false;
      },
      error: ' 0.04468 \\leq \\frac{a}{a_0} \\leq 0.91287',
      toM: (x) => (((5 ** (0.5)) * (1 - x * x) ** 0.5) / x),
      fromM: (m) => ((1 + m ** 2 / 5) ** (-0.5)),
      width: 150,
    },
    aStarToA0: {
      id: 'aStarToA0',
      label: ' \\frac{A^\\star}{A} ',
      sanityCheck: (value) => {
        if (value === '' || (value >= 0 && value <= 1)) return true;
        return false;
      },
      error: '0 \\leq \\frac{A^\\star}{A} \\leq 1',
      disabled: true,
      toM: (x) => (x),
      fromM: (m) => (m * (6 / (5 + m * m)) ** 3),
      width: 150,
    },
    CP0: {
      id: 'CP0',
      label: 'Cp_0',
      sanityCheck: (value) => {
        if (value === '' || (value >= 1.27561 && value <= 1608399.730623475)) return true;
        return false;
      },
      error: '1.27561 \\leq Cp_0 \\leq 1608399.73062',
      disabled: true,
      toM: (x) => (x),
      fromM: (m) => ((((1 + (m * m) / 5) ** (3.5) - 1) / (0.7 * m * m))),
      width: 150,
    },
    prantdlAngle: {
      id: 'prantdlAngle',
      label: '\\nu [^\\circ]',
      sanityCheck: (value) => {
        if (value === '' || (value >= 0 && value <= 125)) return true;
        return false;
      },
      error: '0 \\leq\\nu [^\\circ] < 125',
      disabled: true,
      toM: (x) => (x),
      fromM: (m) => {
        const value = (Math.sqrt(6) * Math.atan(Math.sqrt((1 / 6) * (m ** 2 - 1)))
            - Math.atan(Math.sqrt(m ** 2 - 1))) * (180 / Math.PI);
        return value === 0 ? '0' : value;
      },
      width: 150,
    },
  },
  {
    machNumber: {
      id: 'machNumber',
      label: 'M_n',
      sanityCheck: (value) => {
        if (value === '' || (value >= 1 && value <= 50)) return true;
        return false;
      },
      error: '1 \\leq M \\leq 50',
      toM: (m) => (m),
      fromM: (m) => (m),
      width: 150,
    },
    pHeadToP: {
      id: 'pHeadToP',
      label: '\\frac{\\hat{p}}{p}',
      sanityCheck: (value) => {
        if (value === '' || (value >= 1 && value <= 2916.5)) return true;
        return false;
      },
      error: '1 \\leq \\frac{\\hat{p}}{p} \\leq 2916.5',
      toM: (m) => (((6 * m + 1) / 7) ** (0.5)),
      fromM: (m) => ((7 * m ** 2 - 1) / 6),
      width: 150,
    },
    rhoHeadToRho: {
      id: 'rhoHeadToRho',
      label: '\\frac{\\hat{\\rho}}{\\rho}',
      sanityCheck: (value) => {
        if (value === '' || (value >= 1 && value <= 5.9880239520958085)) return true;
        return false;
      },
      error: '1 \\leq \\frac{\\hat{\\rho}}{\\rho} \\leq 5.9880',
      toM: (m) => (((5 ** (0.5)) * (m ** (0.5))) / ((6 - m) ** 0.5)),
      fromM: (m) => ((6 * m ** 2) / (5 + m ** 2)),
      width: 150,
    },
    tHeadToT: {
      id: 'tHeadToT',
      label: '\\frac{\\hat{T}}{T}',
      sanityCheck: (value) => {
        if (value === '' || (value >= 1 && value <= 487.0555)) return true;
        return false;
      },
      error: '1 \\leq \\frac{\\hat{T}}{T} \\leq 487.0555',
      disabled: true,
      toM: (m) => (m),
      fromM: (m) => (((5 + m ** 2) * (7 * m ** 2 - 1)) / (36 * m ** 2)),
      width: 150,
    },
    aHeadToA: {
      id: 'aHeadToA',
      label: '\\frac{\\hat{a}}{a}',
      sanityCheck: (value) => {
        if (value === '' || (value >= 1 && value <= 22.069333927420647)) return true;
        return false;
      },
      error: '1 \\leq \\frac{\\hat{a}}{a} \\leq 22.0693',
      toM: (m) => (m),
      disabled: true,
      fromM: (m) => ((((5 + m ** 2) * (7 * m ** 2 - 1)) / (36 * m ** 2)) ** (0.5)),
      width: 150,
    },
    p0HeadToP0: {
      id: 'p0HeadToP0',
      label: '\\frac{\\hat{p_0}}{p_0}',
      sanityCheck: (value) => {
        if (value === '' || (value <= 1 && value >= 0.0000011437665705999448)) return true;
        return false;
      },
      error: '1.14377*10^{-6} \\leq \\frac{\\hat{p_0}}{p_0} \\leq 1',
      toM: (m) => (m),
      disabled: true,
      fromM: (m) => (((5.76 * m ** 2) / (5.6 * m ** 2 - 0.8)) ** (3.5)
          * ((-0.4 + 2.8 * m ** 2) / 2.4) * ((1 + m ** 2 / 5) ** (-3.5))),
      width: 150,
    },
    mHead: {
      id: 'mHead',
      label: '\\hat{M}',
      sanityCheck: (value) => {
        if (value === '' || (value <= 1 && value >= 0.37796)) return true;
        return false;
      },
      error: '0.37796 \\leq \\hat{M} \\leq 1',
      toM: (m) => (((m ** 2 + 5) ** (0.5)) / ((7 * m ** 2 - 1) ** (0.5))),
      fromM: (m) => (((5 + m ** 2) / (7 * m ** 2 - 1)) ** (0.5)),
      width: 150,
    },
  },

];

export default inputFieldsConf;
