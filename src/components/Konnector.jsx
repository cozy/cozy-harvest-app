import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import get from 'lodash/get'

import { Routes as HarvestRoutes } from 'cozy-harvest-lib'
import useKonnectorWithTriggers from 'src/hooks/useKonnectorWithTriggers'

export const Konnector = () => {
  const { konnectorSlug } = useParams()
  const history = useHistory()
  const { konnectorWithTriggers, fetching } =
    useKonnectorWithTriggers(konnectorSlug)

  if (fetching) {
    return <p></p>
  } else {
    return (
      <HarvestRoutes
        konnectorRoot={`/connected/${konnectorSlug}`}
        konnector={konnectorWithTriggers}
        onDismiss={() => {
          if (get(window, 'cozy.isFlagshipApp') === 'true') {
            window.ReactNativeWebView.postMessage(
              JSON.stringify({
                message: 'closeHarvest'
              })
            )
          } else {
            history.push('/connected')
          }
        }}
        datacardOptions={null}
      />
    )
  }
}
