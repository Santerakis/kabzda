import React from 'react';

export const PageTitle = React.memo(
    ({title}: {title: string}) => {
        return (
            <h2>
                {title}
            </h2>
        );
    }
)
